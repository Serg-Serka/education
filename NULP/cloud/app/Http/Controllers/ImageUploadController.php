<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ImageUploadController extends Controller
{
    public function uploadImage(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Store the image
        if ($request->file('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            return response()->json(['success' => true, 'path' => $imagePath], 200);
        }

        return response()->json(['error' => 'Image upload failed'], 500);
    }
}
