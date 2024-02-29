SELECT car.CAR_ID
FROM CAR_RENTAL_COMPANY_CAR AS car
LEFT JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY AS history
ON car.CAR_ID = history.CAR_ID
WHERE car.CAR_TYPE = '세단'
AND DATE_FORMAT(history.START_DATE, '%m') = '10'
GROUP BY car.CAR_ID
ORDER BY car.CAR_ID DESC