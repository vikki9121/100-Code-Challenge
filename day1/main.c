#include <stdio.h>
#include<string.h>

int main ()
{
    char a[100];
    printf("Enter a string: ");
    gets(a);
    
    int n=strlen(a);
    
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            if((i==j)||(i+j==n-1))
            {
                printf("%c ",a[i]);
            }
            else{
                printf(" ");
            }
            
        }printf("\n");
    }
}
