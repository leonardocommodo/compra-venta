<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\MeasurementUnit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticlesController extends Controller
{
    public function showArticle()
    {
        $categories = Category::select('id', 'code', 'name')->get();
        $articles = Article::with(['category:id,name', 'measurementUnit:id,name'])->get();
        $measurementUnits = MeasurementUnit::select('id', 'code', 'name')->get();
        return Inertia::render("admin/articles/index", [
            'articles' => $articles,
            'categories' => $categories,
            'measurementUnits' => $measurementUnits,
        ]);
    }
}
