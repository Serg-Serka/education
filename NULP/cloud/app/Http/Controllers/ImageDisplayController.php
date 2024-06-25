<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageDisplayController extends Controller
{
    public function index()
    {
        $images = Storage::disk('public')->files('images');

        return view('images.index', compact('images'));
    }
}
