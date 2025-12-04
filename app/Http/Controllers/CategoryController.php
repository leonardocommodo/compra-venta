<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function showCategory(){
        return Inertia::render('admin/category/index');
    }
}
