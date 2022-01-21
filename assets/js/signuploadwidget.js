document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('localhost:3005/prod/api/signuploadwidget');
  const data = await response.json();

  const options = {
    cloudName: data.cloudname,
    apiKey: data.apikey,
    uploadSignatureTimestamp: data.timestamp,
    uploadSignature: data.signature,
    cropping: false,
    folder: 'images',
    sources: ['local', 'camera', 'facebook', 'instagram'], // restrict the upload sources to URL and local files
    multiple: false, //restrict upload to a single file
    clientAllowedFormats: ['jpg', 'png', 'jpeg'], //restrict uploading to image files only
  };

  const processResults = (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log(result);

      var str = JSON.stringify(result, null, 4);
      // ici => call your end point /ce code retun le lien de l'image
      const urlImg = {
        url: result.info.secure_url,
      };
      /*
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(urlImg),
      };
      fetch('/products', options);*/
      console.log(urlImg);
    }
  };

  const myWidget = window.cloudinary.createUploadWidget(options, processResults);
  document.getElementById('upload_widget').addEventListener('click', () => myWidget.open(), false);
});
