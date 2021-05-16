window.addEventListener("load", () => {
    const width = 800;
    const height = 400;
    const r = Math.min(width, height) / 2 - 50;

    function clear(ctx) {
        ctx.clearRect(-width/2, -height/2, width, height);
        ctx.save();
        ctx.scale(1, -1);
        ctx.font = "30px Sans";
        ctx.fillStyle = "#000000";
        ctx.fillText("Cliquez-moi", width/2 - 200, height/2 - 50);
        ctx.restore();
    }
    function draw_arc(ctx, color, x, y, radius, start, end) {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, start || 0, end || 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
    function draw_line(ctx, color, x1, y1, x2, y2) {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    function draw_petal(ctx, color, x1, y1, x2, y2) {
        ctx.save();
        ctx.translate(x1, y1);
        ctx.rotate(Math.atan2(y2 - y1, x2 - x1));
        let radius = Math.hypot(x2 - x1, y2 - y1);
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(radius / 2, -radius * Math.sqrt(3)/2,
                radius, Math.PI/3, 2*Math.PI/3);
        ctx.arc(radius / 2, radius * Math.sqrt(3)/2,
                radius, -2*Math.PI/3, -Math.PI/3);
        ctx.stroke();
        ctx.restore();
    }
    function draw_rose(ctx, color, petal_count, x, y, radius, start_angle) {
        for (let i = 0; i < petal_count; i++) {
            let angle = start_angle + 2 * i * Math.PI / petal_count;
            draw_petal(ctx, color,
                       x, y,
                       x + radius * Math.cos(angle),
                       y + radius * Math.sin(angle));
        }
    }

    let canvas_list = {
        six_petales: {
            actions: [
                (ctx => draw_arc(ctx, "#FF0000", 0, 0, r)),
                (ctx => draw_arc(ctx, "#0000FF",
                                 r * Math.cos(0),
                                 r * Math.sin(0),
                                 r,
                                 2*Math.PI/3 - .1,
                                 4*Math.PI/3 + .1)),
                (ctx => draw_arc(ctx, "#0000FF",
                                 r * Math.cos(Math.PI / 3),
                                 r * Math.sin(Math.PI / 3),
                                 r,
                                 3*Math.PI/3 - .1,
                                 5*Math.PI/3 + .1)),
                (ctx => draw_arc(ctx, "#0000FF",
                                 r * Math.cos(2 * Math.PI / 3),
                                 r * Math.sin(2 * Math.PI / 3),
                                 r,
                                 4*Math.PI/3 - .1,
                                 6*Math.PI/3 + .1)),
                (ctx => draw_arc(ctx, "#0000FF",
                                 r * Math.cos(3 * Math.PI / 3),
                                 r * Math.sin(3 * Math.PI / 3),
                                 r,
                                 5*Math.PI/3 - .1,
                                 7*Math.PI/3 + .1)),
                (ctx => draw_arc(ctx, "#0000FF",
                                 r * Math.cos(4 * Math.PI / 3),
                                 r * Math.sin(4 * Math.PI / 3),
                                 r,
                                 6*Math.PI/3 - .1,
                                 8*Math.PI/3 + .1)),
                (ctx => draw_arc(ctx, "#0000FF",
                                 r * Math.cos(5 * Math.PI / 3),
                                 r * Math.sin(5 * Math.PI / 3),
                                 r,
                                 7*Math.PI/3 - .1,
                                 9*Math.PI/3 + .1)),
                (ctx => {
                    clear(ctx);
                    draw_arc(ctx, "#FF0000", 0, 0, r),
                    draw_rose(ctx, "#0000FF", 6, 0, 0, r, 0)
                }),
                (ctx => clear(ctx)),
            ]
        },
        taille_petale1: {
            actions: [
                (ctx => {
                    draw_arc(ctx, "#0000FF", 0, 0, r);
                    draw_petal(ctx, "#0000FF", 0, 0, r, 0);
                   draw_line(ctx, "#FF00FF",
                             0, 0, r, 0);
                   draw_line(ctx, "#00FF00",
                             r/2, -r/8, r/2, r/8);
                }),
                (ctx => clear(ctx)),
            ]
        },
        taille_petale2: {
            actions: [
                (ctx => {
                    draw_arc(ctx, "#0000FF", 0, 0, r);
                    draw_petal(ctx, "#0000FF", 0, 0, r, 0);
                }),
                (ctx => draw_arc(ctx, "#000000", r, 0, r, Math.PI/2, 3*Math.PI/2)),
                (ctx => {draw_line(ctx, "#000000",
                                  r/2, -r,
                                   r/2, r);
                         draw_line(ctx, "#00FF00",
                                   r/2, -r/8, r/2, r/8)
                        }
                ),
                (ctx => draw_line(ctx, "#FF00FF", 0, 0, r, 0)),
                (ctx => draw_arc(ctx, "#000000", r/2, 0, r, Math.PI/2, 3*Math.PI/2)),
                (ctx => draw_line(ctx, "#000000",
                                  r/4, -r,
                                  r/4, r)
                ),
                (ctx =>
                    draw_arc(ctx, "#FF0000", r/4, r * Math.sqrt(15)/4, r,
                             -Math.PI/2-.3, -Math.PI/2+.3)),
                (ctx => draw_arc(ctx, "#FF0000", r/4, -r * Math.sqrt(15)/4, r,
                                 Math.PI/2-.3, Math.PI/2+.3)),
                (ctx => clear(ctx)),
            ]
        },
        taille_petale3: {
            actions: [
                (ctx => {
                    draw_line(ctx, "#00FF00",
                                  -r/8, 0,
                                  r/8, 0);
                    draw_line(ctx, "#FF00FF",
                                  0, -r/2, 0, r/2);
                    draw_arc(ctx, "#0000FF",
                             -r * Math.sqrt(3)/2,
                             0,
                             r,
                             -Math.PI/3 - .1,
                             Math.PI/3 + .1);
                    draw_arc(ctx, "#0000FF",
                             r * Math.sqrt(3)/2,
                             0,
                             r,
                             2*Math.PI/3 - .1,
                             -2*Math.PI/3 + .1);
                }),
                (ctx =>
                 draw_line(ctx, "#000000",
                          -400,
                           0,
                           -20,
                           0)),
                (ctx =>
                 draw_line(ctx, "#000000",
                          -2*r * Math.sqrt(3)/2,
                           -r/2,
                           0,
                           r/2)),
                (ctx =>
                    draw_arc(ctx, "#000000",
                             0,
                             r/2,
                             2*r)),
                (ctx =>
                    draw_arc(ctx, "#FF0000",
                             -Math.sqrt(2**2 - 1/4) * r,
                             0,
                             2 * r,
                             -Math.PI/6 - .1,
                             Math.PI/6 + .1)),
                (ctx =>
                    draw_arc(ctx, "#FF0000",
                                 Math.sqrt(2**2 - 1/4) * r,
                                 0,
                                 2 * r,
                                 5*Math.PI/6 - .1,
                             -5*Math.PI/6 + .1)),
                (ctx => clear(ctx)),
            ],
        },
        dessin_petale1: {
            actions: [
                (ctx => {
                    draw_arc(ctx, "#0000FF", -15, -100, 200);
                    draw_line(ctx, "#FF00FF",
                              -15, -100, -15, 100);
                }),
                (ctx => draw_arc(ctx, "#000000", -15, 100, 150)),
                 (ctx => draw_arc(ctx, "#000000", -15, -100, 150)),
                (ctx =>
                 draw_arc(ctx, "#FF0000", -15 + Math.sqrt(150**2 - 100**2), 0, 150, Math.PI/2, 3*Math.PI/2)),
                (ctx =>
                 draw_arc(ctx, "#FF0000", -15 - Math.sqrt(150**2 - 100**2), 0, 150, 3*Math.PI/2, Math.PI/2)),
                (ctx => clear(ctx)),
                ]
        },
        dessin_petale2: {
            actions: [
                (ctx => {
                    draw_arc(ctx, "#0000FF", -15, -100, 200);
                    draw_line(ctx, "#00FF00",
                              -30, 0, 0, 0);
                    draw_line(ctx, "#FF00FF",
                              -15, -100, -15, 100);
                }),
                (ctx => {
                    clear(ctx);
                    draw_arc(ctx, "#FF00FF",
                             0, 0, Math.hypot(15, 100));
                    draw_line(ctx, "#FF00FF",
                              0, 15*2, 0, 100);
                    draw_line(ctx, "#FF00FF",
                              -100, 0, 0, 0);
                    draw_line(ctx, "#009900",
                              0, 0, 0, 15*2);
                    draw_line(ctx, "#FF0000",
                              -100, 0, -350, 0);
                }),
                (ctx => {
                    draw_line(ctx, "#000000",
                              -100, 0, 0, 15*2);
                    draw_line(ctx, "#000000",
                              0, 100, -100*100/(2*15), 0);
                }),
                (ctx => {
                    draw_arc(ctx,
                             "#FF0000",
                             -100*100/(2*15), 0,
                             100*100/(2*15)
                            );
                }),
                (ctx => {
                    clear(ctx);
                    draw_arc(ctx, "#0000FF", -15, -100, 200);
                    draw_line(ctx, "#00FF00",
                              -30, 0, 0, 0);
                    draw_line(ctx, "#FF00FF",
                              -15, -100, -15, 100);
                    draw_arc(ctx,
                             "#FF0000",
                             -100*100/(2*15), 0,
                             100*100/(2*15),
                             -Math.PI/8,
                             Math.PI/8
                            );
                    draw_arc(ctx,
                             "#FF0000",
                             100*100/(2*15) - 30, 0,
                             100*100/(2*15),
                             7*Math.PI/8,
                             9*Math.PI/8
                            );
                }),
                (ctx => clear(ctx)),
            ],
        },
        doubler_petales: {
            actions: [
                (ctx => {
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 6, 0, 0, r, 0)
                }),
                (ctx => draw_arc(ctx, "#FF00FF",
                                 r * Math.cos(0),
                                 r * Math.sin(0),
                                 r * .75,
                                 0,
                                 Math.PI)),
                (ctx => draw_arc(ctx, "#FF00FF",
                                 r * Math.cos(Math.PI / 3),
                                 r * Math.sin(Math.PI / 3),
                                 r * .75,
                                 Math.PI, 0)),
                (ctx => {
                    draw_line(ctx, "#000000",
                              0, 0,
                              2 * r * Math.cos(Math.PI / 6),
                              2 * r * Math.sin(Math.PI / 6));
                    ctx.beginPath();
                    ctx.arc(r * Math.cos(Math.PI / 6),
                            r * Math.sin(Math.PI / 6), 5,
                            0, 2 * Math.PI);
                    ctx.fillStyle = "#000000";
                    ctx.fill();
                }),
                (ctx => {
                    clear(ctx);
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 12, 0, 0, r, 0)
                }),
                (ctx => clear(ctx)),
            ],
        },

        extraire_petales: {
            actions: [
                (ctx => {
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 6, 0, 0, r, 0)
                }),
                (ctx => {
                    clear(ctx);
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 3, 0, 0, r, 0)
                }),
                (ctx => {
                    clear(ctx);
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 6, 0, 0, r, 0)
                }),
                (ctx => {
                    clear(ctx);
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 2, 0, 0, r, 0)
                }),
                (ctx => clear(ctx)),
            ],
        },

        cinq_petales: {
            actions: [
                (ctx => {
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_line(ctx, "#FF0000", 0, r, 0, r);
                    draw_line(ctx, "#FF0000", -r, 0, r, 0);
                }),
                (ctx => draw_arc(ctx, "#0000FF", 0, r/2, r/2)),
                (ctx => draw_line(ctx, "#0000FF", -r, 0, 0, r/2)),
                (ctx => draw_arc(ctx, "#FF00FF", -r, 0,
                                 r*(Math.sqrt(5)-1)/2, -Math.PI/2, Math.PI/2)),
                (ctx => {
                    clear(ctx);
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 5, 0, 0, r, 0)
                }),
                (ctx => clear(ctx)),
            ],

        },

        petales_dedoublees: {
            actions: [
                (ctx => {
                    clear(ctx)
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 2, 0, 0, r, 0)
                }),
                (ctx => {
                    clear(ctx)
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 4, 0, 0, r, 0)
                }),
                (ctx => {
                    clear(ctx)
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 8, 0, 0, r, 0)
                }),
                (ctx => {
                    clear(ctx)
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 16, 0, 0, r, 0)
                }),
                (ctx => {
                    clear(ctx)
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 5, 0, 0, r, 0)
                }),
                (ctx => {
                    clear(ctx)
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 10, 0, 0, r, 0)
                }),
                (ctx => {
                    clear(ctx)
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 20, 0, 0, r, 0)
                }),
                (ctx => clear(ctx)),
            ]
        },

        ppcm_petales: {
            actions: [
                (ctx => {
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#005500", 3, 0, 0, r, 0);
                }),
                (ctx => {
                    draw_rose(ctx, "#FF00FF", 5, 0, 0, r, 4*Math.PI/3);
                }),
                (ctx => {
                    clear(ctx);
                    draw_arc(ctx, "#FF0000", 0, 0, r);
                    draw_rose(ctx, "#0000FF", 15, 0, 0, r, 0);
                }),
                (ctx => clear(ctx)),
            ],
        },

        rosaces: { actions: [] },
    };
    [2, 3, 4, 5, 6, 8, 10, 12, 15, 17, 20].forEach(petal_count => {
        canvas_list.rosaces.actions.push((ctx => {
            clear(ctx);
            draw_arc(ctx, "#FF0000", 0, 0, r);
            draw_rose(ctx, "#0000FF", petal_count, 0, 0, r, 0);
        }));
    });

    for (const id in canvas_list) {
        canvas_list[id].step = 0;
        let canvas = document.getElementById(id);
        canvas.width = width;
        canvas.height = height;
        let context = canvas.getContext("2d");
        context.translate(width / 2, height / 2);
        context.scale(1, -1);
        clear(context);
        function nextAction() {
            let actions = canvas_list[id].actions;
            context.save();
            actions[canvas_list[id].step](context);
            canvas_list[id].step++;
            canvas_list[id].step %= actions.length;
            context.restore();
        };
        canvas.addEventListener("click", nextAction);
        nextAction();
    }
});
