<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticlesController extends Controller
{
    public function showArticles(){
        return Inertia::render("admin/product/index");
    }
}
