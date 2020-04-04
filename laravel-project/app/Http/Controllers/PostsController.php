<?php

namespace App\Http\Controllers;
use DB;
use App\Posts;
class PostsController{
    public function show($slug){
        $post = Posts::where('slug', $slug)->firstOrfail();
    
        return view('test',['post' => $post]);
        
        
    }
}