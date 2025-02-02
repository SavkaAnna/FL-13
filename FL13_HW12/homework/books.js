let books = [
    {
        id: 1,
        title: 'Бог как иллюзия',
        author: 'Ричард Докинз',
        img: 'https://www.bookvoed.ru/files/1836/33/08/23/4.jpeg',
        plot: '«Бог как иллю́зия» — книга английского этолога, биолога, популяризатора науки'+
            'Ричарда Докинза, профессора Оксфордского университета.'+
            ' В книге Докинз приводит доводы в пользу того, что сверхъестественного создателя'+
            ' почти наверняка не существует, а вера в персонифицированное божество — это иллюзия.'
    },
    {
        id: 2,
        title: 'Мечтают ли андроиды об электроовцах',
        author: 'Филип Киндред Дик',
        img: 'https://cdn.eksmo.ru/v2/ITD000000000821071/COVER/cover1__w600.jpg',
        plot: 'Научно-фантастический роман американского писателя Филипа Дика, написанный в 1968 году.'+
            ' В романе рассказывается история «охотника за головами» Рика Декарда,'+
            ' который преследует андроидов — существ, почти неотличимых от человека, '+
            'объявленных вне закона на Земле. Действие происходит в отравленном радиацией и '+
            'частично заброшенном Сан-Франциско будущего.'
    },
    {
        id: 3,
        title: 'Граф Монте-Кристо. Часть 1',
        author: 'Александр Дюма',
        img: 'https://cdn.ast.ru/v2/ASE000000000830336/COVER/cover1__w600.jpg',
        plot: 'События разворачиваются во Франции начала 19 в. Эдмон Дантес - марсельский моряк, '+
            'выполнявший предсмертную волю капитана корабля, доставляет в Париж письмо. Прибыв в порт, '+
            'Дантес намеревался жениться на Мерседес, девушке из соседней деревни. Но из-за злобных'+
            ' интриг врагов он попадает в замок Иф. Долгих 14 лет Дантес проводит в мрачных'+
            ' казематах, вынашивая план мести, прежде чем ему удается бежать. Но выйдя на свободу из'+
            ' заточения, он претворяет в жизнь все задуманное, и никому не укрыться от мести'
    }
]
for(let i = 0; i<books.length; i++){
    localStorage.setItem(i+1, JSON.stringify(books[i]));
}

