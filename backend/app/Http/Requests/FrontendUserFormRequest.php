<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use ZxcvbnPhp\Zxcvbn;

class FrontendUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if ($this->route('frontendUser')) {// If ID we must be changing an existing record
            return Auth::user()->can('frontendUser update');
        } else { // If not we must be adding one
            return Auth::user()->can('frontendUser add');
        }
    }

    /**
     * Get the validation rules that apply to the request
     *
     * @return array
     */
    public function rules()
    {

        $id = $this->route('frontendUser');

        $rules = [
            'id' => 'numeric',
            'name' => 'nullable|string|max:128',
            'email' => 'nullable|string|max:225',
            'remember_token' => 'nullable|string|max:128',
        ];

                if($this->route('frontendUser')) { // If ID we must be changing existing frontend user
                    $rules['name'] = 'required|string|max:128|unique:frontendUsers,name,' . $id;
                    $rules['email'] = 'required|string|max:255|unique:frontendUsers,email,' . $id;
                    $rules['password'] = 'nullable|string|min:8|max:255';
                    $rules['confirm_password'] = 'nullable|string|min:8|max:255|required_with:password|same:password';
                } else { // If not we must be adding a new entry
                    $rules['name'] = 'required|string|max:128|unique:frontendUsers' . $id;
                    $rules['email'] = 'required|string|max:255|unique:frontendUsers' . $id;
                    $rules['password'] = 'required|string|min:8|max:255';
                    $rules['confirm_password'] = 'required|string|min:8|max:255|same:password|';
                }

        return $rules;
    }

    /**
     * Configure the password validator instance.
     *
     * @param \Illuminate\Validation\Validtor $validator
     * @return void
     */
    public function withValidator($validator)
    {
        if(!empty($this->input('password'))) {
            $validator->after(function ($validator) {
                if($this->checkPasswordStrength()) {
                    $validator->errors()->add('password', 'Password is not strong enough');
                }
            });
        }
    }

    function checkPasswordStrength()
    {
        $user_inputs = [
            $this->input('email')
        ];
        if ($this->password) {
            $zxcvbn = new Zxcvbn();
            $strength = $zxcvbn->passwordStrength($this->password, $user);
            return $strength['score'] < 1;
        } else {
            return true;
        }
    }
}