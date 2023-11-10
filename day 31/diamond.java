import java.util.* ;
import java.io.*; 
public class Solution {

	public static void printPattern(int n) {

		// Write your code here.
		for(int i=0; i<=n/2;i++)
		{
			for(int j=n/2;j>=i+1;j--)
			{
				System.out.print(" ");
			}
			for(int j=0;j<=i*2;j++)
			{
				System.out.print("*");
			}
			System.out.println();
		}

		for ( int i=(n/2)-1;i>=0;i--)
		{
			for(int j=0;j<=i*2;j++)
			{
				System.out.print(" ");
			}
			for(int j=0;j<=i*2;j++)
			{
				System.out.print("*");
			}
			System.out.println();
		}

	}
}
