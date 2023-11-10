class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        
        int n=nums1.length+nums2.length;
        int[] arr = new int [n];
        System.arraycopy(nums1,0,arr,0,nums1.length);
         System.arraycopy(nums2,0,arr,nums1.length,nums2.length);

         Arrays.sort(arr);

         int m=n/2;

         if(arr.length%2==0)
         {
             return (double) (arr[m-1]+arr[m])/2;
         }
         else return arr[m];

    }
}