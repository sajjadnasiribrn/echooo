<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        return response([
            'items' => Category::withCount('posts')
                ->sortFromRequest()
                ->searchInFields()
                ->paginate($request->per_page ?? 10),
            'headers' => Category::getHeaderFields(),
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $request->validate(['title' => 'required']);

        Category::create($request->only('title'));

        return response([
            'data' => 'ok'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        return Category::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $request->validate(['title' => 'required']);

        Category::findOrFail($id)->update($request->only('title'));

        return response([
            'data' => 'ok'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return Response
     */
    public function destroy(Request $request)
    {
        $request->validate(['items' => 'required', 'items.*' => 'required']);

        Category::destroy($request->items);

        return response([
            'data' => 'ok'
        ], 200);
    }
}
