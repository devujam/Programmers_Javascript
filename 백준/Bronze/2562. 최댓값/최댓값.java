import java.util.*;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[] arr = new int[10];

		int max = 0;
		int max_loc = 0;

		for(int i=1; i<=9; i++) {
			arr[i] = sc.nextInt();
			
			if(arr[i]>max) {
				max = arr[i];
				max_loc = i;
			}
			
		}
		System.out.println(max +"\n"+ max_loc);
	}

}
