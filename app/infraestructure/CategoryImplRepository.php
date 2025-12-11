<?php

namespace App\Infraestructure;

use App\Domain\Repositories\ICategoryRepository;
use App\Models\Category;

class CategoryImplRepository implements ICategoryRepository
{
    public function getAllCategories(): \Illuminate\Support\Collection
    {
        return Category::select('id','name')->orderBy('name')->get();
    }
}
