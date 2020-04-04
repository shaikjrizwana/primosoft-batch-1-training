<?php

namespace App\Http\Controllers;
class PostsController{
    public function show($post){
        $posts = [
            'my-first-post' => "Hello, this is my first blog post",
            'my-second-post' => 'Second blog post'
        ];
        if(!array_key_exists($post, $posts)){
            abort(404,'sorry page not found');
        }
       
        return view('test',['post' => $posts[$post]]);
        
        
    }
}