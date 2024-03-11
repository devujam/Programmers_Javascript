SELECT department.DEPT_ID
  , department.DEPT_NAME_EN
  , ROUND(AVG(employees.SAL)) AVG_SAL
FROM HR_DEPARTMENT department
JOIN HR_EMPLOYEES employees ON department.DEPT_ID = employees.DEPT_ID
GROUP BY department.DEPT_ID
ORDER BY AVG_SAL DESC