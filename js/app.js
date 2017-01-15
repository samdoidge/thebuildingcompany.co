 $(document).ready(function () {
        $('#myModal').on('show.bs.modal', function (e) {

            var image = $(e.relatedTarget).attr('src');
            image = image.replace("thumbs", "large");
            $(".img-responsive").attr("src", image);
        });
});