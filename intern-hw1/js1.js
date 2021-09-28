let a,b,c,disc,x1,x2,p,q;
let arr =[1,0,-4];
        function equation(arr){
            [a,b,c]=arr;
                disc=Math.pow(b,2)-4*a*c;
        if(disc<0){
            console.log('Настоящий корень отсутствует');
        }
        else{
            p=-b/(2*a);
            q=Math.sqrt(disc)/(2*a);
            x1=p+q;
            x2=p-q;
                console.log('Дискриминант:' ,disc ,'Корни:x1 =' ,x1,',x2=' ,x2);
}
}
equation(arr);