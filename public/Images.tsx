const imageGlobs= import.meta.glob('./*.{jpg,png,jpeg,svg}', {as: "url", eager: true});

// Define a type for the image object
type ImageObject = {
    [key: string]: string;
};

// Define an object to store the imported images
const images: ImageObject = {};

// I hate javascript
for (let path in imageGlobs) {
    const key = path.match(/(?!\/)[^\/]+(?=.(png|jpg|svg|jpeg))/)?.[0];
    if (key) {
        images[key] = imageGlobs[path];
    }
}

export default images;
