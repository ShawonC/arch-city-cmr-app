<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class FrontendUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if ($this->route('frontend_user')) {  // If ID we must be changing an existing record
            return Auth::user()->can('frontend_user update');
        } else {  // If not we must be adding one
            return Auth::user()->can('frontend_user add');
        }

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        $id = $this->route('frontend_user');

        $rules = [
         //  Ignore duplicate email if it is this record
         //   'email' => 'required|string|email|unique:invites,email,' . $id . '|unique:users|max:191',

            'id' => 'numeric',
            'name' => 'nullable|string|max:64',
            'email' => 'nullable|string|max:225',
        ];

        return $rules;
    }
}
