<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticlesController extends Controller
{
    public function showArticle(){
        $articles = Article::with(['category:id,name', 'measurementUnit:id,name'])->get();
        return Inertia::render("admin/articles/index", [
            'articles' => $articles
        ]);
    }

    /* public function getAllArticles(){
        
    } */
}
