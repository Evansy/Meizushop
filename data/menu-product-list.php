<?php
    header("Content-Type:application/json;charset=utf-8;");
    @$idx = $_REQUEST['idx'];

    $db = [
        [
            ['img_src'=>'menu-product-01-01.png','title'=>'PRO 6','origin_price'=>'','price'=>2499],
            ['img_src'=>'menu-product-01-02.png','title'=>'PRO 5','origin_price'=>2799,'price'=>2499]
        ],
        [
            ['img_src'=>'menu-product-02-01.png','title'=>'魅蓝3','origin_price'=>'','price'=>599],
            ['img_src'=>'menu-product-02-02.png','title'=>'魅蓝note3','origin_price'=>'','price'=>799],
            ['img_src'=>'menu-product-02-03.png','title'=>'魅蓝metal','origin_price'=>'','price'=>999],
            ['img_src'=>'menu-product-02-04.png','title'=>'魅蓝note2','origin_price'=>'','price'=>799]
        ],
        [
            ['img_src'=>'menu-product-03-01.png','title'=>'MX5','origin_price'=>1699,'price'=>1499]
        ],
        [
            ['img_src'=>'menu-product-04-01.png','title'=>'魅族EP51蓝牙运动耳机','origin_price'=>'','price'=>269],
            ['img_src'=>'menu-product-04-02.png','title'=>'魅族HD50头戴式耳机','origin_price'=>'','price'=>399],
            ['img_src'=>'menu-product-04-03.png','title'=>'魅族移动电源（标准版）','origin_price'=>'','price'=>99],
            ['img_src'=>'menu-product-04-04.png','title'=>'魅族移动电源 快充版','origin_price'=>'','price'=>149],
            ['img_src'=>'menu-product-04-05.png','title'=>'魅族EP-21HD耳机','origin_price'=>'','price'=>599]
        ],
        [
            ['img_src'=>'menu-product-05-01.png','title'=>'CILINE-沁麟多功能运动料理机','origin_price'=>'','price'=>169],
            ['img_src'=>'menu-product-05-02.png','title'=>'云麦好轻mini智能体脂称','origin_price'=>79,'price'=>75],
            ['img_src'=>'menu-product-05-03.png','title'=>'阿巴町智能通话手表T1501','origin_price'=>'','price'=>599],
            ['img_src'=>'menu-product-05-04.png','title'=>'新游智能游戏手柄N1pro','origin_price'=>119,'price'=>99],
            ['img_src'=>'menu-product-05-05.jpg','title'=>'魅族路由器 极速版','origin_price'=>'','price'=>199],
            ['img_src'=>'menu-product-05-06.png','title'=>'东芝甲壳虫移动硬盘','origin_price'=>'','price'=>369]
        ]
    ];

    echo json_encode($db[$idx]);
?>