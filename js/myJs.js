const textConfig = {
    text1: "Hế nhô em iu 😘",
    text2: "Anh có 1 số điều muốn nói với em nè, em hãy lắng nghe nhó 😝",
    text5: "Không nha :33",
    text6: "Dạ. Đúng vậy  ",
    text7: "Oh my god 😲WOW😲 Nhìn sexy chưa kìa, chỉ muốn ôm hoy 😊",
    text8: "Ááá.. chân đẹp, mặt xinh, cười duyên... Thế này không iu chịu sao nổi zợ nhỉ 😝",
    text9: "Eo,người iu tui đó cả nhà ơi ❣️, em là người đầu tiên cho tui nhiều cảm giác mới lạ luôn đó hihi 😍",
    text15: "Chời chời, nhìn em kìa, người gì đâu mà cute quá chời 😅... iu em nhất luôn í... muốn cắn cho phát ❣️",
    text10: "Thực ra thì a có điều muốn nói ....🙁",
    text11: "Trang ạ, thích em từ cái nhìn đầu tiên là thật, từ thích rồi đến yêu 😍, anh thấy hạnh phúc lắm luôn í ❣️, a ko biết con đường phía trước thế nào nhưng a mong chúng ta cùng đi với nhau thật lâu trên con đường đời em nhá 💏. Trang à, ANH YÊU EM 💞 👫 💞",
    text12: "Trang ạ, thích em từ cái nhìn đầu tiên là thật, từ thích rồi đến yêu 😍, anh thấy hạnh phúc lắm luôn í ❣️, a ko biết con đường phía trước thế nào nhưng a mong chúng ta cùng đi với nhau thật lâu trên con đường đời em nhá 💏. Trang à, ANH YÊU EM 💞 👫 💞",
};

$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $(".spinner").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({
            overflow: "visible",
        });
    }, 600);
    $(".bg1").hide();
    $("#text3").html(textConfig.text3);
    $("#text4").html(textConfig.text4);
    $("#no").html(textConfig.text5);
    $("#yes").html(textConfig.text6);

    function firstQuestion() {
        $(".content").hide();
        Swal.fire({
            title: textConfig.text1,
            text: textConfig.text2,
            imageUrl: "img/cuteCat.jpg",
            imageWidth: 300,
            imageHeight: 300,
            background: '#FF99CC',
            imageAlt: "Custom image",
        }).then(function() {
            $(".content").show(200);
        });
    }

    // switch button position
    function switchButton() {
        var leftNo = $("#no").css("left");
        var topNO = $("#no").css("top");
        var leftY = $("#yes").css("left");
        var topY = $("#yes").css("top");
        $("#no").css("left", leftY);
        $("#no").css("top", topY);
        $("#yes").css("left", leftNo);
        $("#yes").css("top", topNO);
    }
    // move random button póition
    function moveButton() {
        // var audio = new Audio("sound/Swish1.mp3");
        // audio.play();
        if (screen.width <= 600) {
            var x = Math.random() * 300;
            var y = Math.random() * 500;
        } else {
            var x = Math.random() * 500;
            var y = Math.random() * 500;
        }
        var left = x + "px";
        var top = y + "px";
        $("#no").css("left", left);
        $("#no").css("top", top);
    }

    var n = 0;
    $("#no").mousemove(function() {
        if (n < 1) switchButton();
        if (n > 1) moveButton();
        n++;
    });
    $("#no").click(() => {
        if (screen.width >= 900) switchButton();
    });

    // show popup
    $("#yes").click(function() {
        $(".content").hide();
        Swal.fire({
            title: textConfig.text7,
            imageUrl: "img/2.png",
            imageWidth: 300,
            imageHeight: 300,
            confirmButtonText: "Dạ 😘",
            background: '#FAF0E6 url("img/input-bg.jpg")',
            imageAlt: "Custom image",
        }).then((result) => {
            Swal.fire({
                    title: textConfig.text8,
                    imageUrl: "img/3.png",
                    imageWidth: 300,
                    imageHeight: 300,
                    confirmButtonText: "Vâng 😍",
                    background: '#FFFFCC',
                    imageAlt: "Custom image",
                })
                .then((result) => {
                    Swal.fire({
                        title: textConfig.text9,
                        imageUrl: "img/4.png",
                        imageWidth: 300,
                        imageHeight: 300,
                        confirmButtonText: "Dạ ❣️",
                        background: '#CCFFFF',
                        imageAlt: "Custom image",
                    }).then((result) => {
                        Swal.fire({
                            title: textConfig.text15,
                            imageUrl: "img/5.png",
                            imageWidth: 300,
                            imageHeight: 300,
                            confirmButtonText: "Ayzzaaa 💖",
                            background: '#FFC0CB',
                            imageAlt: "Custom image",
                        }).then((result) => {
                            const swalWithBootstrapButtons = Swal.mixin({
                                customClass: {
                                    confirmButton: "btn btn-success",
                                    cancelButton: "btn btn-danger",
                                },
                            });

                            swalWithBootstrapButtons
                                .fire({
                                    title: textConfig.text10,
                                    icon: "question",
                                    showCancelButton: true,
                                    confirmButtonText: "A nói đi?",
                                    cancelButtonText: "Sao thế a?",
                                    reverseButtons: true,
                                })
                                .then((result) => {
                                    if (result.isConfirmed) {
                                        Swal.fire({
                                            title: textConfig.text11,
                                            confirmButtonText: "Dạ 😍",
                                            onClose: () => {
                                                window.location = "./iloveu.html";
                                            },
                                        });
                                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                                        Swal.fire({
                                            title: textConfig.text12,
                                            confirmButtonText: "Dạ 😍",
                                            onClose: () => {
                                                window.location = "./iloveu.html";
                                            },
                                        });
                                    }
                                });
                        })
                    })
                })
        })
    })
    $("#txtReason").focus(function() {
        var handleWriteText = setInterval(function() {
            textGenerate();
        }, 10);
        $("#txtReason").blur(function() {
            clearInterval(handleWriteText);
        });
    });
})