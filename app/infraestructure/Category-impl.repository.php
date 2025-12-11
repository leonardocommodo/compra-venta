<?php

namespace App\Infraestructure;

use App\Domain\Repositories\ICategoryRepository;
use App\Models\Category;

class CategoryImplRepository implements ICategoryRepository
{
    public function getAllCategories()
    {
        return Category::all();
    }
}
