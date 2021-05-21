window.onload=function(){
    const imgDiv = document.querySelector(".add-thumbnail");
    const img = document.querySelector(".add-thumbnail-img");
    const file = document.querySelector("#file");
    const uploadBtn = document.querySelector("#uploadBtn");

    imgDiv.addEventListener('mouseenter', function(){

        uploadBtn.style.display = "block";
    })

    imgDiv.addEventListener('mouseleave', function(){

        uploadBtn.style.display = "none";
    })

    file.addEventListener('change', function(){
        const choosedfile = this.files[0];

        if (choosedfile) {
            const reader = new FileReader();

            reader.addEventListener('load', function() {
                img.setAttribute('src', reader.result);
            });

            reader.readAsDataURL(choosedfile);
        }
    });
}