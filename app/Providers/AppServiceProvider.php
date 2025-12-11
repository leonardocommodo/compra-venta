<?php

namespace App\Providers;

use App\Domain\Repositories\ICategoryRepository;
use App\Infraestructure\CategoryImplRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        $this->app->bind(ICategoryRepository::class, CategoryImplRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
