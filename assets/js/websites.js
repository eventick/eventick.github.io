$(function() {
    var baseUrl = "http://www.eventick.com.br/assets/buttons/";

    changeButton(baseUrl);

    $('input.event_url').focusin(function(e){
        var url = $(this).val();
        if (url === ''){
            var placeholder = $(this).attr('placeholder')
            $(this).data('placeholder', placeholder);
            $(this).attr('placeholder', '');
        }
    });

    $('select', '#button_options').on('change', function(e){
        changeButton(baseUrl);
    });

    $('#code_dump').on('show', function () {
        var integration = '#' + $('[data-toggle="modal"]', '.tab-pane.active').data('integration');
        var preview = $.trim($(integration).html());
        $('textarea', '#code_dump').val(preview);
    });

    $('input.event_url').focusout(function(e){
        var url = $(this).val();
        if ( url !== '' ) {
            $('input.event_url').val(url);
            $('a', '#button_preview').attr('href', $(this).val());
            $('iframe', '#tickets_preview').attr('src', url + '/embedded');
         } else {
            var placeholder = $(this).data('placeholder');
            $(this).attr('placeholder', placeholder);
            $('iframe', '#tickets_preview').attr('src', placeholder + '/embedded');
         }

      /*  var size =  $('iframe', '#tickets_preview').contentWindow.document.body.offsetHeight + 'px';
        alert(size);
        $('iframe', '#tickets_preview').attr('height', size );*/
    });

    $('iframe', '#tickets_preview').load(function() {
        var height = this.contentWindow.document.body.offsetHeight;
        if( height > 0 ) {
            this.height = this.contentWindow.document.body.offsetHeight + 'px';
        }
    });

});

function changeButton(baseUrl) {
    var size = $('select#size').val();
    var type = $('select#text').val();
    var button = type + '-' + size + '.png';
    var alt = $('#text_' + type).val();
    var $buttonImg = $('img', '#button_preview');
    $buttonImg.attr('src', baseUrl + button );
    $buttonImg.attr('alt', alt );
    $('a', '#button_preview').attr('title', alt );

    return button;
}
