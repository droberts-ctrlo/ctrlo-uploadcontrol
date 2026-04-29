# @ctrlo/upload-control

A simple control for uploading files and JSON

## Usage

### Functions

#### upload

A convenience method encapsulating the usage of the class for simple usage

```javascript
upload(url, data, method, (loaded, total)=>{
    console.log(`Uploaded ${loaded} of ${total} data`);
});
```

Send the specified data to the url given using the defined method.

Url can be a `String`, or a URL object
Data can be a `FormData` object, a JSON object, or undefined
Method can be one of the standard HTTP methods (i.e. `GET`, `POST`, `PUT`, `DELETE`, etc.)

### Classes

#### Uploader

```javascript
// Create a new uploader instance, bound to the provided url {String | URL}, and using the specified request method
const uploader = new Uploader(url, method)

// Add the progress method
uploader.onProgress((loaded, total)=>{
    console.log(`Uploaded ${loaded} of ${total} data`);
});

// Send the specified data to the given endpoint, and store the result in a variable
const result = await uploader.upload<object>(data);
```
