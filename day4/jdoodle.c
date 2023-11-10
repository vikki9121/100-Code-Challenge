#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    gets(str);
    int n=strlen(str);
    int i=0,j=n-1;
    char t;
    while(i<j)
    {
    while(!((str[i]>=48 && str[i]<=57)|| (str[i]>=97 && str[i]<=122)||(str[i]>=65 && str[i]<=91)))
    i++;
    while(!((str[j]>=48 && str[j]<=57)|| (str[j]>=97 && str[j]<=122)||(str[j]>=65 && str[j]<=91)))
    j--;
    t=str[i];
    str[i]=str[j];
    str[j]=t;
     i++;
    j--;
    }
    for(int k=0;k<n;k++)
    {
        printf("%c",str[k]);
    }
    return 0;
}