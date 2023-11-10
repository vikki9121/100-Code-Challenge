#include<stdio.h>
#include<string.h>

void time(char a[])
{
    int n = strlen(a);
    if(a[n-2]=='A')
    {
        if(a[0]=='1'&& a[1]=='2')
        {
            a[0]='0';
            a[1]='0';
        }
    }
    
    else {
        if(!(a[0]=='1' && a[1]=='2'))
        {
            int x=(a[0]-48)*10+(a[1]-48)+12;
            a[0]=(x/10)+48;
            a[1]=(x%10)+48;
        }
    }
    for(int i = 0;i<n;i++)
    {
        printf("%c",a[i]);
    }
    
}

int main() {
    char a[100];
    gets(a);
    time(a);
}