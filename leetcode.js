//Add Two Numbers - medium
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const l3 = new ListNode(0);
    let head = l3;
    let sum = 0;
    let rem = 0;
    while (l1 || l2 || sum > 0) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum > 9) {
            sum -= 10;
            rem = 1;
        }
        head.next = new ListNode(sum);
        head = head.next
        sum = rem;
        rem = 0;
    }
    return l3.next
};

//Longest Substring Without Repeating Characters - medium
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0, result = 0;
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const last = map.get(char);
        if (last >= start) start = last + 1;
        map.set(char, i);
        const count = i - start + 1;
        if (count > result) result = count;
    }
    return result;
}

//Median of Two Sorted Arrays - hard
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums3 = [];
    let i = 0;
    let j = 0;
    if (nums1.length == 0) {
        nums3 = nums2;
    }
    if (nums2.length == 0) {
        nums3 = nums1;
    }
    while ((i < nums1.length || j < nums2.length) && nums1.length && nums2.length) {
        if (i == nums1.length) {
            nums3 = nums3.concat(nums2.slice(j))
            break;
        }
        if (j == nums2.length) {
            nums3 = nums3.concat(nums1.slice(i))
            break;
        }
        if (nums1[i] < nums2[j]) {
            nums3.push(nums1[i]);
            i++;
        } else {
            nums3.push(nums2[j]);
            j++;
        }
    }
    if (nums3.length % 2 !== 0) return nums3[Math.floor(nums3.length / 2)];
    return (nums3[Math.floor(nums3.length / 2) - 1] + nums3[Math.floor(nums3.length / 2)]) / 2;
};

//Container With Most Water - medium
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let largestContainer = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = 1; j < height.length; j++) {
            let container = 0;
            if (height[i] >= height[j]) {
                container = height[j] * (j - i);
            } else {
                container = height[i] * (j - i);
            }
            if (container > largestContainer) {
                largestContainer = container;
            }
        }
    }
    return largestContainer;
};

//Integer to Roman - medium
/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
    let rom = '';
    let int = num;
    let level = 1;
    while (int) {
        let current = toRom((int % 10) * level);
        rom = current + rom;
        int = Math.floor(int / 10);
        level *= 10;
    }
    return rom;
};

const toRom = function (num) {
    switch (num) {
        case 1:
            return 'I';
            break;
        case 2:
            return 'II';
            break;
        case 3:
            return 'III';
            break;
        case 4:
            return 'IV';
            break;
        case 5:
            return 'V';
            break;
        case 6:
            return 'VI';
            break;
        case 7:
            return 'VII';
            break;
        case 8:
            return 'VIII';
            break;
        case 9:
            return 'IX';
            break;
        case 10:
            return 'X';
            break;
        case 20:
            return 'XX';
            break;
        case 30:
            return 'XXX';
            break;
        case 40:
            return 'XL';
            break;
        case 50:
            return 'L';
            break;
        case 60:
            return 'LX';
            break;
        case 70:
            return 'LXX';
            break;
        case 80:
            return 'LXXX';
            break;
        case 90:
            return 'XC';
            break;
        case 100:
            return 'C';
            break;
        case 200:
            return 'CC';
            break;
        case 300:
            return 'CCC';
            break;
        case 400:
            return 'CD';
            break;
        case 500:
            return 'D';
            break;
        case 600:
            return 'DC';
            break;
        case 700:
            return 'DCC';
            break;
        case 800:
            return 'DCCC';
            break;
        case 900:
            return 'CM';
            break;
        case 1000:
            return 'M';
            break;
        case 2000:
            return 'MM';
            break;
        case 3000:
            return 'MMM';
            break;
        default:
            return '';
    }
}

//Roman to Integer - easy
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    let result = 0;
    let temp = 0;
    for (let i = 0; i < s.length; i++) {
        let curr = toInt(s[i]);
        let next = toInt(s[i + 1]);
        if (curr >= next) {
            result = result + curr - temp;
            temp = 0;
        } else {
            temp = curr;
        }
    }
    return result;
};

const toInt = function (c) {
    switch (c) {
        case 'I':
            return 1;
            break;
        case 'V':
            return 5;
            break;
        case 'X':
            return 10;
            break;
        case 'L':
            return 50;
            break;
        case 'C':
            return 100;
            break;
        case 'D':
            return 500;
            break;
        case 'M':
            return 1000;
            break;
        default:
            return null;
    }
}

//Longest Common Prefix - easy
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return '';
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0 && prefix) {
            prefix = prefix.slice(0, prefix.length - 1)
        }
    }
    return prefix;
};

//Valid Parentheses - easy
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '{' || s[i] == '(' || s[i] == '[') {
            stack.push(s[i]);
        } else {
            if (isOposite(s[i], stack[stack.length - 1])) {
                stack.pop();
            } else {
                return false;
            }
        }

    }
    return stack.length == 0;
};

const isOposite = (c, prev) => {
    switch (c) {
        case '}':
            return prev == '{';
        case ']':
            return prev == '[';
        case ')':
            return prev == '(';
        default:
            return false;
    }

}

//Merge Two Sorted Lists - easy
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let h1 = l1;
    let h2 = l2;
    const l3 = new ListNode();
    let h3 = l3;
    while (h1 || h2) {
        if (!h1) {
            h3.next = h2;
            break;
        } else if (!h2) {
            h3.next = h1;
            break;
        }
        if (h1.val <= h2.val) {
            h3.next = new ListNode(h1.val);
            h1 = h1.next;
            h3 = h3.next;
        } else {
            h3.next = new ListNode(h2.val);
            h2 = h2.next;
            h3 = h3.next;
        }
    }
    return l3.next;
};

//Remove Duplicates from Sorted Array - easy
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length == 0) return 0;
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[count]) {
            count++;
            nums[count] = nums[i];
        }
    }
    return count + 1;
};

//Remove Element - easy
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums[i] = nums[nums.length - 1];
            nums.pop();
            i = i - 1;
        }
    }
    return nums.length;
};

//Implement strStr() - easy
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    let len1 = haystack.length;
    let len2 = needle.length;
    if (!len2) return 0;
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (i + j === len1) return -1;
            if (haystack[i + j] !== needle[j]) break;
            if (j === len2 - 1) return i;
        }
    }
    return -1;
};

//Search Insert Position - easy
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i = 0;
    for (i; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return i;
};
