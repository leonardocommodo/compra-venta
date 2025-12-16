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

    public function store(Request $request){
        $validatedData = $request->validate([
            'code' => 'required|string|unique:articles,code',
            'name' => 'required|string',
            'cost_price' => 'required|numeric|min:0',
            'sell_price' => 'required|numeric|min:0',
            'category_id' => 'required|exists:categories,id',
            'measurement_unit_id' => 'required|exists:measurement_units,id',
        ]);

        $article = Article::create($validatedData);

        return response()->json(['message' => 'Article created successfully', 'article' => $article], 201);
    }


}
