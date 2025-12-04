<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticlesController extends Controller
{
    public function showArticle(){
        return Inertia::render("admin/articles/index");
    }
}
