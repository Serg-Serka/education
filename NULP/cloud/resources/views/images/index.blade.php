<!DOCTYPE html>
<html>
<head>
    <title>Image Gallery</title>
    <style>
        .image-container {
            display: flex;
            flex-wrap: wrap;
        }
        .image-container img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            margin: 10px;
        }
    </style>
</head>
<body>
<h1>Image Gallery</h1>
<div class="image-container">
    @foreach ($images as $image)
        <img src="{{ asset('storage/' . $image) }}" alt="Image">
    @endforeach
</div>
</body>
</html>
