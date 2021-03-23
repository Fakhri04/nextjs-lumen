<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ProductController extends Controller
{
    //
    public function GetAll(){
        $data=Product::get();
        return $data;

    }
}
