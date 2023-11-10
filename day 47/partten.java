static void prattenstar6(int n) {
        for (int i = 0; i <n; i++) {
            int space=n-i;
            for(int s=1;s<=space;s++)
            {
                System.out.print(" ");
            }
            for( int j=i;j>=0;j--)
            {
                System.out.print(j);
            }
            for( int j=1;j<=i;j++)
            {
                System.out.print(j);
            }
            System.out.println();


        }