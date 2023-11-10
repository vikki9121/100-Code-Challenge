#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

void reverse(char a[])
{
    int i,j,k;
    int n=strlen(a);
    j=n-1;
    for (i=n-1;i>=0;i--)
    {
        if(a[i]==32)
        {
            for(k=i+1;k<=j;k++)
            {
                printf("%c",a[k]);
                
            }
            j=i-1;
            printf(" ");
        }
        if(i==0)
        {
            for(k=i;k<=j;k++)
            {
                printf("%c",a[k]);
            }
        }
    }
    
}

int main() {
    char str[50];
    gets(str);
    // int n=strlen(str);
    
    reverse(str);
    

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */    
    return 0;
}
