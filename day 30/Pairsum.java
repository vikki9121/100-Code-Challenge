import java.io.*;
import java.util.* ;

public class Solution{
    public static List<int[]> pairSum(int[] arr, int s) {
        // Write your code here.
        List<int []> ans = new ArrayList<>();
        Arrays.sort(arr);
        for(int i=0;i<arr.length;i++)
        {
            for( int j= i+1;j<arr.length;j++)
            {
                if(arr[i]+arr[j]==s)
                {
                    int res [] = new int [2];
                    res [0]=arr[i];
                    res[1]=arr[j];
                    Arrays.sort(res);
                    ans.add(res);
                }
            }
        }
        return ans;
    }
}
