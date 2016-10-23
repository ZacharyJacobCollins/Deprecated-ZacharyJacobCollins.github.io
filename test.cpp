#include <stdio.h>
#include <string.h>
#include <stdlib.h>


int main(int argc,char *argv[]){

	char engw [7] [3]  = {{'S','u','n'},{'M','o','n'},{'T','u','e'},{'W','e','d'},{'T','h','u'},{'F','r','i'},{'S','a','t'}};
	char engy [12] [3] = {{'J','a','n'},{'F','e','b'},{'M','a','r'},{'A','p','r'},{'M','a','y'},{'J','u','n'},{'J','u','l'},{'A','u','g'},{'S','e','p'},{'O','c','t'},{'N','o','v'},{'D','e','c'}};
	/*how do I get standard input?*/
	char test [3] = {0,0,0};
	test[0] = getchar();
	test[1] = getchar();
	test[2] = getchar();
	short domd = 7;
	short domm = 12;
	short daynum = 0;
	short counter = 0;
	for (short q=0; q<domd; q++){
	if ((engw[q][0]==test[0])&&(engw[q][1]==test[1])&&(engw[q][2]==test[2])){
	counter=q;
	}
	char newword [32]  = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
	short num = counter;
	FILE * wd;
	wd  = fopen("$1", "r");
	short w=0;
	while(((fgetc(wd)) != EOF)&& (num>=1)) {
	if ((fgetc(wd)) == ' ') {
	num--;
		}
	if (num == 1) {
	newword [w] = (( fgetc(wd)));
	w++;
		}
	fclose(wd);
	short newstr=strlen(newword);
	for (short h=0; h<newstr; h++){
	char x=newword[h];
	printf ("%x", x);
	}
	}
	printf (' ');
	getchar(); /* for the space between the month and the day at hand */
	test[0] = getchar();
	test[1] = getchar();
	test[2] = getchar();
	for (short m=0; q<domm; m++){
	if ((engy[q][0]==test[0])&&(engy[q][1]==test[1])&&(engy[q][2]==test[2])){
	counter=m;
	}
	char newwordo [32]  = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
	short numo = counter;
	FILE * wd;
	wd  = fopen("$1", "r");
	short u=0;
	while(((fgetc(wd) != '\n') &&  (fgetc(wd)!= EOF)));
	while(((fgetc(wd)) != EOF)&& (num>=1)) {
	if ((fgetc(wd) == ' ')) {
	numo--;
		}
	if (numo == 1) {
	newwordo [u] = ((fgetc(wd)));
	u++;
		}
	fclose(wd);
	short newstro=strlen(newwordo);
	for (short k=0; k<newstro; k++){
	char x=newwordo[k];
	printf ("%x", x);
}
}
}
}
}
}
