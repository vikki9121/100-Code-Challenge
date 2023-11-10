#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

void move(char str[]) {
    int n = strlen(str);
    int left = 0;
    int right = n - 1;

    while (left < right) {
        // Find the first 0 from the left side
        while (str[left] == '1' && left < right) {
            left++;
        }

        // Find the first 1 from the right side
        while (str[right] == '0' && left < right) {
            right--;
        }

        // Swap 0 and 1
        if (left < right) {
            char temp = str[left];
            str[left] = str[right];
            str[right] = temp;
            left++;
            right--;
            
        }
        
    }for(int i=0;i<n;i++)
        {
            printf("%c",str[i]);
        }
}

int main() {
    
    char str[100];
    gets(str);
    move(str);

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */    
    return 0;
}