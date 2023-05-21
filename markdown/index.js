
const   editor  = document.getElementById('markdownEditor'),
        preview = document.getElementById('preview');



editor.addEventListener('input', e => {

    preview.innerHTML = DOMPurify.sanitize(marked.parse( e.target.value ));

});

