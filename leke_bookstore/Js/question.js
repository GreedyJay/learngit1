/**
 * Created by GreedyJay on 2017/5/31.
 */
$(function () {
    var defaultData = [
        {
            text: '第一章 有理数',
            nodes: [
                {
                    text: '1.1 正数和负数',
                    nodes: [
                        {
                            text: '1.1.1 正数',
                            href: '#grandchild1',
                            tags: ['0']
                        },
                        {
                            text: '1.1.2 负数',
                            href: '#grandchild2',
                            tags: ['0']
                        }
                    ]
                },
                {
                    text: '1.2 有理数',
                    href: '#child2',
                    tags: ['0']

                }
            ]
        },
        {
            text: '第二章 一元一次方程',
            nodes: [
                {
                    text: '2.1 从算式到方程',
                    href: '#child1',
                    tags: ['2']
                },
                {
                    text: '2.2 合并同类项和移项',
                    href: '#child2',
                    tags: ['0']
                }
            ]
        },
        {
            text: '第三章 图像认识实步',
            nodes: [
                {
                    text: '3.1 从算式到方程',
                    href: '#child1',
                    tags: ['2'],
                    nodes: [
                        {
                            text: '3.1.1 算是同时',
                            href: '#grandchild1',
                            tags: ['0']
                        },
                        {
                            text: '3.1.2 方程概念',
                            href: '#grandchild2',
                            tags: ['0']
                        }
                    ]
                },
                {
                    text: '3.2 合并同类项和移项',
                    href: '#child2',
                    tags: ['0'],
                    nodes: [
                        {
                            text: '3.2.1 合并同类型',
                            href: '#grandchild1',
                            tags: ['0']
                        },
                        {
                            text: '3.2.2 移项',
                            href: '#grandchild2',
                            tags: ['0']
                        }
                    ]
                }
            ]
        },
        {
            text: '第四章 相交线与平行线',
            href: '#parent4',
            tags: ['0']
        }
    ];
    $('#catalog-bk').treeview({
        color: "#666",
        showBorder: false,
        data: defaultData
    });
})