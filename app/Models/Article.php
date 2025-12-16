<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'code',
        'name',
        'barcode',
        'brand',
        'stock',
        'min_stock',
        'cost_price',
        'sell_price',
        'category_id',
        'measurement_unit_id',
        'status',
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function measurementUnit(){
        return $this->belongsTo(MeasurementUnit::class);
    }

}
