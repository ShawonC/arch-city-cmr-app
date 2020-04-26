<?php

namespace App\Http\Controllers\API;

use App\Step;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use App\FrontendUser;
use App\Http\Requests\FrontendUserFormRequest;

class FrontendUserController extends Controller
{



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        info(__METHOD__ );

        return FrontendUser::all();
    }

    /**
     * Display a listing of the resource with pagination.
     *
     * @return \Illuminate\Http\Response
     */
    public function index_v1_0_1(Request $request)
    {

        if (!Auth::user()->can('frontend_user index')) {
            return response()->json([
                'error' => 'Not authorized'
            ], 403);
        }

        info(__METHOD__ );

        $page = $request->get('page', '1');                // Pagination looks at the request
        //    so not quite sure if we need this
        $column = $request->get('column', 'Name');
        $direction = $request->get('direction', '-1');
        $keyword = $request->get('keyword', '');


        $keyword = $keyword != 'null' ? $keyword : '';
        $column = $column ? mb_strtolower($column) : 'name';


        return FrontendUser::indexData(10, $column, $direction, $keyword);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newFrontendUser = FrontendUser::add($request->all());
        return $newFrontendUser->id;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
//        $applicant =  Applicant::with('assignment','assignment.user','step', 'step.status')->find($id);
        $frontendUser =  FrontendUser::find($id);


        return $frontendUser;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(FrontendUserFormRequest $request, $id)
    {
        $frontendUser = FrontendUser::findOrFail($id);
        $frontendUser->update($all_fields);

        return $frontendUser;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        FrontendUser::find($id)->delete();

        return 204;
    }
}
