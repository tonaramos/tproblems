/*
88. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/



var merge = function (nums1, m, nums2, n) {
  var length = m + n;                 //length of the nums1 array
  m--;                                // this yields the max index of m and n
  n--;
  
  while (n >= 0) {                    // while there are positions left in nums2
    length--;                         //  index for sums1 array
    
    if (nums1[m] > nums2[n]) {        //  if nums1m(last num) is grater then nums2n(last num)
      nums1[length] = nums1[m--];     //    assign to the last cell of nums, the value of the num in nums1[length] 
    } else {                          
      nums1[length] = nums2[n--];     //  assign nums2[n--] to num1[length the value
    }
  }
}