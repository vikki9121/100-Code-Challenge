public class Solution{
    public static void swapNumber(int []a, int []b) {
        // Write your code here.
        int x=a[0];
        int y=b[0];
        x=x^y;
        y=x^y;
        x=x^y;
        a[0]=x;
        b[0]=y;

    }
}