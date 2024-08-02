import java.util.HashMap;

public class Nqt {
    public static void main(String[] args) {
        // int[] arr = {-1, 2, -1, 3, 2};
        
        // int ans = NonDuplicateNumber(arr);

        // System.out.println(ans);

        int arr[] = {1, 2, 3, 3};
        String ans = equilibrium(arr);
        System.out.println(ans);
    }

    public static String equilibrium(int arr[]) {
        // code here
        int sum = 0;
        int sumsarr[] = new int[arr.length];
        
        for(int i=0; i<arr.length; i++){
            sum += arr[i];
            sumsarr[i] = sum;
            // System.out.print(sumsarr[i] + " ");
            
        }
        // System.out.println();
        for(int i=0; i<arr.length; i++){
            int right = sum - sumsarr[i];
            int left = sumsarr[i] - arr[i];
            if(right == left){
                return "true";
            }
        }
        
        return "false";
    }

    public static int NonDuplicateNumber(int[] arr){
        HashMap<Integer, Integer> map = new HashMap<>();

        for(int i = 0; i<arr.length; i++){
            if(map.containsKey(arr[i])){
                map.put(arr[i], map.get(arr[i]) + 1);
            }else{
                map.put(arr[i], 1);
            }
        }

        int res = -1;
        for(Integer key: map.keySet()){
            if(map.get(key) == 1){
                res = key;
            }
        }
        return res;
    }
}