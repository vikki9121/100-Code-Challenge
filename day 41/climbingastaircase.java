class Solution {
    public int climbStairs(int n) {
        if(n==0||n==1)
        {
            return 1;

        }
        int a =1, b=1;
        for(int i=2;i<=n;i++)
        {
            int c= b;
            b=a+b;
            a=c;
        }
        return b;
        
    }
}