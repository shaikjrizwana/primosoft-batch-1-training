<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function show($post){
        $posts=[
            'my-first-post' =>'My First blog post',
            'my-second-post' =>'This is my second blog post'
        ];

        if(! array_key_exists($post,$posts)){
            abort(404,'Sorry that post does not exists');
        }
        return view('post',[
            'post'=>$posts[$post]
        ]);
    }

}
