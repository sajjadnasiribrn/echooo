<?php

namespace App\Http\Controllers\Admin;

use App\Draft;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DraftController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return response([
            'items' => Draft::with('user')
                ->sortFromRequest()
                ->searchInFields()
                ->paginate($request->per_page ?? 10),
            'headers' => Draft::getHeaderFields()
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

        foreach ($request->items as $id) {
            $draft=Draft::find($id);
            $images = $draft->images()->get();
            foreach ($images as $image) {
                $path = public_path(Str::afterLast('*' . $image->path, '*/'));
                if (file_exists($path)) {
                    unlink($path);
                }
            }
            $draft->images()->detach();
            DB::table('images')
                ->whereIn('id', collect($images)->pluck('id'))->delete();
        }

        Draft::destroy($request->items);

        return  response([
            'data' => 'ok'
        ], 200);
    }
}
