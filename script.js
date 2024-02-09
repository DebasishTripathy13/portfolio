<script>
    document.querySelectorAll('.contact-list a').forEach(item => {
        item.addEventListener('click', event => {
            alert('You clicked on a contact link!');
        });
    });
</script>