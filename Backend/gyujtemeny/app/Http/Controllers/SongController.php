<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;

class SongController extends Controller
{
    
    public function index(){
    
        $songs = response()->json(Song::all());
        return $songs;
    
            }
    
    

    
    public function show($id)
    {$song = response()->json(Song::find($id));
        return $song;

        
    }
    public function store(Request $request)
    {
        $song = new Song();
        $song->title = $request->title;
        $song->name = $request->name;
        $song->date = $request->date;
         
        $song->save();


    }





    
    public function update(Request $request, $id)
    {
        $song = Song::find($id);
        $song->title = $request->title;
        $song->name = $request->name;
        $song->date = $request->date;
        
        $song->save();
    }

    
    public function destroy($id)
    {
        $song = Song::find($id);       
        $song->delete();
    }
}
